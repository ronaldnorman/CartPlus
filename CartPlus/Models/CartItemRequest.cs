using Newtonsoft.Json;

namespace CartPlus.Models
{
    public class CartItemRequest
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("qty")]
        public int Qty { get; set; }

        [JsonProperty("lineTotal")]
        public decimal LineTotal { get; set; }
    }
}
