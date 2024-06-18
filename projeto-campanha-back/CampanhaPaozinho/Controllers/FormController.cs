using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;
using MySqlConnector;
using ServiceContracts;
using CrossLayerObjects.DTO;

namespace CampanhaPaozinho.Controllers
{
    public class FormController(IFormService formService) : Controller
    {
        private readonly IFormService _formService = formService;

        [HttpPost("user-data")]
        [Consumes(MediaTypeNames.Application.Json)]
        public IActionResult Index([FromBody] FormData dataForm)
        {
            var result = _formService.RegisterContact(dataForm);
            //var jsonResponse = Newtonsoft.Json.JsonConvert.SerializeObject(a);

            return result ? Ok() : BadRequest();
        }
        /*
        private static bool SendToDB(FormDataModel dataForm)
        {
            // Detalhes da conexão
            var host = "database-campanha-1.ctsuuq8c0bqv.sa-east-1.rds.amazonaws.com";
            var username = "thiagoslds";
            var password = "CampanhaPa0zinh0";
            var database = "database_campanha_paozinho";

            // String de conexão
            var connectionString = $"Server={host};User ID={username};Password={password};Database={database}";

            // Conectar ao banco de dados
            using var conn = new MySqlConnection(connectionString);
            conn.Open();
            Console.WriteLine("Conexão estabelecida com sucesso!");

            // Comando para inserir dados
            using (var cmd = new MySqlCommand("INSERT INTO mensagens_contato (nome, email, mensagem) " +
                "VALUES (@nome, @email, @mensagem)", conn))
            {
                cmd.Parameters.AddWithValue("@email", dataForm.Email);
                cmd.Parameters.AddWithValue("@nome", dataForm.Name);
                cmd.Parameters.AddWithValue("@mensagem", dataForm.Text);
                cmd.ExecuteNonQuery();
            }

            Console.WriteLine("Dados inseridos com sucesso!");

            conn.Close();

            return true;
        }
        */
    }
}
