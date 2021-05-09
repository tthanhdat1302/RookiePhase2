using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RookieOnlineAssetManagement.Entities
{
    public class Asset
    {
        [Key]
        public string Id { get; set; }
        public string AssetName { get; set; }
        public string Specification { get; set; }
        public DateTime InstalledDate { get; set; }
        public StateAsset StateAsset { get; set; }
        [ForeignKey("CateIdAsset")]
        public string CategoryId { get; set; }
        public Category Category { get; set; }


    }
    public enum StateAsset
    {
        [Description("Available")]
        Available = 0,
        [Description("Not Available")]
        NotAvailable = 1,
        [Description("Waiting For ecycling")]
        Waitingforrecycling = 2,
        [Description("Available")]
        Recycled = 3,
        [Description("Assigned")]
        Assigned = 4
    }
}
