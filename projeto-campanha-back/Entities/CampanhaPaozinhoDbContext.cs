using Microsoft.EntityFrameworkCore;

namespace Entities
{
    public class CampanhaPaozinhoDbContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<FormDataModel> FormData { get; set; }
    }
}
