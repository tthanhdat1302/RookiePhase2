using System.ComponentModel.DataAnnotations;

namespace RookieOnlineAssetManagement.Entities
{
    public class Category
    {
        [Key]
        public string Id { get; set; }
        public string CategoryName { get; set; }
        
    }
}