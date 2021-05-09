using System;

namespace RookieOnlineAssetManagement.Models.Assignment
{
    public class CreateAssignmentModel
    {
        public string AssetId { get; set; }
        public int BorrowerId { get; set; }
        public int LenderId { get; set; }
        public DateTime AssignedDate { get; set; }
        public string Note { get; set; }
        public int StateAssignment { get; set; }
    }
}