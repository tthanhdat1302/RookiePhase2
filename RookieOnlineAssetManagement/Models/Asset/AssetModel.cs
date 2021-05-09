using System;

namespace RookieOnlineAssetManagement.Models.Asset
{
    public class AssetModel
    {
        public string Id { get; set; }
        public string AssetName { get; set; }
        public string Specification { get; set; }
        public DateTime InstalledDate { get; set; }
        public string StateAsset { get; set; }
        public string CategoryId { get; set; }

    }
}