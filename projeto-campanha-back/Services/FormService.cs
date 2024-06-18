using ServiceContracts;
using CrossLayerObjects.DTO;
using Entities;

namespace Services
{
    public class FormService : IFormService
    {
        private readonly CampanhaPaozinhoDbContext _db;

        public FormService(CampanhaPaozinhoDbContext campanhaPaozinhoDbContext)
        {
            _db = campanhaPaozinhoDbContext;
        }

        public bool RegisterContact(FormData dataForm)
        {
            try
            {
                var formDataModel = dataForm.ToFormDataModel();

                _db.FormData.Add(formDataModel);
                return _db.SaveChanges() > 0;
            }
            catch { return false; }
        }
    }
}
