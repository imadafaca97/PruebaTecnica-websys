using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using examen.Data;
using examen.Models;

namespace examen.Controllers {
  [Route("api/personas")]
  [ApiController]

  public class personaController : ControllerBase{
    private readonly ApplicationDbContext _context;

    public personaController (ApplicationDbContext context){
      _context = context;
    }

    //Get : api/personas
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Persona>>> GetPersonas() {
      return await _context.Personas.ToListAsync();
    }
    //Post : api/personas
    [HttpPost]
    public async Task<ActionResult> PostPersona(Persona persona) {
      var exists = await _context.Personas.AnyAsync(e => e.Email == persona.Email);
      if(exists) {
        return BadRequest("Correo repetido");
      }else{
        _context.Personas.Add(persona);
        await _context.SaveChangesAsync();
        
        return CreatedAtAction("GetPersonas", new {id=persona.Id}, persona);
      }
    }
    //Delete : api/personas
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeletePersona(int Id) {
      var persona = await _context.Personas.FindAsync(Id);
      if (persona == null){
        return NotFound();
      }
      _context.Personas.Remove(persona);
      await _context.SaveChangesAsync();

      return NoContent();
    }
  }
}