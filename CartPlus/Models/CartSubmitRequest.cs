using Newtonsoft.Json;
using System.Collections.Generic;

namespace CartPlus.Models
{
    public class CartSubmitRequest
    {
        [JsonProperty("cartItems")]
        public IEnumerable<CartItemRequest> CartItems { get; set; }

        [JsonProperty("cartTotals")]
        public CartTotalsRequest Totals { get; set; }
    }
}
