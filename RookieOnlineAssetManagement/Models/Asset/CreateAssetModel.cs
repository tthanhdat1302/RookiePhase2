using System;

namespace RookieOnlineAssetManagement.Models.Asset
{
    public class CreateAssetModel
    {
         public string AssetName { get; set; }
        public string Specification { get; set; }
        public DateTime InstalledDate { get; set; }
        public int StateAsset { get; set; }
        public string CategoryId { get; set; }
    }
}