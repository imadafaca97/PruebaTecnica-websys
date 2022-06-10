using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace examen.Data.Migrations
{
    public partial class Second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "name",
                table: "Personas",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "lastName",
                table: "Personas",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "Personas",
                newName: "Email");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Personas",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<string>(
                name: "LastName",
                table: "Personas",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Personas",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Personas",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Personas",
                newName: "lastName");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Personas",
                newName: "email");

            migrationBuilder.AlterColumn<int>(
                name: "name",
                table: "Personas",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<int>(
                name: "lastName",
                table: "Personas",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<int>(
                name: "email",
                table: "Personas",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT");
        }
    }
}
