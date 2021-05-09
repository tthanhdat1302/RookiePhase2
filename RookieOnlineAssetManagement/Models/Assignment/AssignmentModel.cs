using System;

namespace RookieOnlineAssetManagement.Models.Assignment
{
    public class AssignmentModel
    {
        public int Id { get; set; }
        public string AssetId { get; set; }
        public int BorrowerId { get; set; }
        public int LenderId { get; set; }
        public DateTime AssignedDate { get; set; }
        public string Note { get; set; }
        public string StateAssignment { get; set; }
    }
}