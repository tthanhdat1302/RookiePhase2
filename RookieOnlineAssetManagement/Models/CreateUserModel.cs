
using System;

namespace RookieOnlineAssetManagement.Models
{
    public class CreateUserModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime JoinedDate { get; set; }
        public bool Gender { get; set; }
        public bool Type { get; set; }
    }
}