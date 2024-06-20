using ServiceContracts;
using Services;
using Entities;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();

builder.Services.Add(new ServiceDescriptor(
  typeof(IFormService),
  typeof(FormService),
  ServiceLifetime.Transient
));

builder.Services.AddDbContext<CampanhaPaozinhoDbContext>(options => {
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

var app = builder.Build();

app.MapControllers();
app.UseRouting();
app.UseCors();
app.Run();
