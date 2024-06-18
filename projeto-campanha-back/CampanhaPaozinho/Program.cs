using ServiceContracts;
using Services;
using Entities;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

builder.Services.Add(new ServiceDescriptor(
  typeof(IFormService),
  typeof(FormService),
  ServiceLifetime.Transient
));

builder.Services.AddDbContext<CampanhaPaozinhoDbContext>(options => {
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    //var serverVersion = new MySqlServerVersion(new Version(8, 0, 21)); // Substitua pela versão do MySQL que você está usando
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

var app = builder.Build();

app.MapControllers();
app.UseRouting();
app.UseCors(routes => routes.AllowAnyMethod().AllowAnyHeader().SetIsOriginAllowed(origin => true).AllowCredentials());
app.Run();
