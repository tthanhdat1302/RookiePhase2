using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace RookieOnlineAssetManagement.Entities
{
    public class Returning
    {
        [Key]
        public int Id { get; set; }
        public int AssignmentId { get; set; }
        public int UserAccepteId { get; set; }
        public DateTime ReturnedDate { get; set; }
        public Assignment Assignment { get; set; }
        public virtual User UserRequest { get; set; }
        public virtual User UserAccept { get; set; }
        public StateReturning StateReturning { get; set; }

    }
    public enum StateReturning
    {
        [Description("Waiting for returning")]
        Waitingforreturning = 0,
        [Description("Completed")]
        Completed = 1,

      
    }
}
