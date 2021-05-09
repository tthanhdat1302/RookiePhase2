using System;

namespace RookieOnlineAssetManagement.Models.Returning
{
    public class CreateReturningModel
    {
        public int AssignmentId { get; set; }
        public int UserAccepteId { get; set; }
        public DateTime ReturnedDate { get; set; }
        public int StateReturning { get; set; }
    }
}