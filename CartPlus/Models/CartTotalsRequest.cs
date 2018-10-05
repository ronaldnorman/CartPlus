using Newtonsoft.Json;

namespace CartPlus.Models
{
    public class CartTotalsRequest
    {
        [JsonProperty("subTotal")]
        public decimal Subtotal { get; set; }

        [JsonProperty("tax")]
        public decimal Tax { get; set; }

        [JsonProperty("total")]
        public decimal Total { get; set; }
    }
}
