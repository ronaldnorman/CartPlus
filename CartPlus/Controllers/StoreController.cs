using System;
using System.Threading.Tasks;
using CartPlus.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace CartPlus.Controllers
{
    [Route("api/[controller]")]
    public class StoreController : Controller
    {
        [HttpPost("[action]")]
        public bool SubmitCart([FromBody]CartSubmitRequest request)
        {
            if (request == null || request.CartItems == null || request.Totals == null)
                return false;

            // TODO: Save to the database using a respository
            Task.Delay(5000);

            return true;
        }
    }
}
