using Microsoft.EntityFrameworkCore;
using System;
namespace examen.Models;

[Index(nameof(Email), IsUnique = true)]
public class Persona {
  public int Id {get; set;}
  public string Name {get; set;}
  public string LastName {get; set;}
  public string Email {get; set;}
}