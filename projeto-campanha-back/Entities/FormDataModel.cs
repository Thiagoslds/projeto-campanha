using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{
    [Table("mensagens_contato")]

    public class FormDataModel
    {
        [Key]
        public int Id { get; set; }
        [StringLength(255)]
        public string? Nome { get; set; }
        [StringLength(255)]
        public string? Email { get; set; }
        public string? Mensagem { get; set; }
    }
}
