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

        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("user-data")]
        [Consumes(MediaTypeNames.Application.Json)]
        public IActionResult Save([FromBody] FormData dataForm)
        {
            var result = _formService.RegisterContact(dataForm);

            return result ? Ok() : BadRequest();
        }
    }
}
