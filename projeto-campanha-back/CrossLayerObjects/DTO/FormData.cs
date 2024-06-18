using Entities;

namespace CrossLayerObjects.DTO
{
    public class FormData
    {
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Text { get; set; }

        public FormDataModel ToFormDataModel()
        {
            return new FormDataModel { Nome = Name, Email = Email, Mensagem = Text };
        }
    }
}
