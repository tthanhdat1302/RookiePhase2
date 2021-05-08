
namespace RookieOnlineAssetManagement.Models
{
    public class CreateUserModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DateOfBirth { get; set; }
        public string JoinedDate { get; set; }
        public bool Gender { get; set; }
        public bool Type { get; set; }
    }
}