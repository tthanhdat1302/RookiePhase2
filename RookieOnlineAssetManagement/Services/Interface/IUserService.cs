using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using RookieOnlineAssetManagement.Data;
using RookieOnlineAssetManagement.Entities;
using RookieOnlineAssetManagement.Models.User;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Services.Interface
{
    public interface IUserService
    {
        Task<ActionResult<IEnumerable<UserModel>>> GetUsers();
        Task<ActionResult<UserModel>> GetUsersById(int id);
        Task CreateUser(CreateUserModel createUserModel);
        Task UpdateUser(int id, CreateUserModel createUserModel);
        Task DisableUser(int id);
    }
}
