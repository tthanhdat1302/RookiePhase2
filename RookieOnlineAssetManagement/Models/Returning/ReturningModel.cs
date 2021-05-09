using System;

namespace RookieOnlineAssetManagement.Models.Returning
{
    public class ReturningModel
    {
        public int Id { get; set; }
        public int AssignmentId { get; set; }
        public int UserAccepteId { get; set; }
        public DateTime ReturnedDate { get; set; }
        public string StateReturning { get; set; }

    }
}