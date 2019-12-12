// using Microsoft.EntityFrameworkCore;

// namespace Clients.Models
// {
//   public class ClientsContext : DbContext
//   {
//     public ClientsContext(DbContextOptions<ClientsContext> options)
//     : base(options)
//     {
//     }

//     public DbSet<Client> Clients { get; set; }

//     protected override void OnModelCreating(ModelBuilder builder)
//     {
//       builder.Entity<Client>()
//         .HasData(
//           new Client { ClientID = 1, Name = "Lauren", Email = "Lauren@mail.com", Phone = "123456789" },
//           new Client { ClientID = 2, Name = "Douglas", Email = "Douglas@mail.com", Phone = "234567891" },
//           new Client { ClientID = 3, Name = "Attila", Email = "Attila@mail.com", Phone = "345678912" },
//           new Client { ClientID = 4, Name = "Gandalf", Email = "Gandalf@mail.com", Phone = "456789123" },
//           new Client { ClientID = 5, Name = "Reptar", Email = "Reptar@mail.com", Phone = "567891234" }
//         );
//     }
//   }
// }