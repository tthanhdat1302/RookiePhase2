using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using RookieOnlineAssetManagement.Data;
using RookieOnlineAssetManagement.Entities;
using RookieOnlineAssetManagement.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RookieOnlineAssetManagement.Services;

namespace RookieOnlineAssetManagement.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<UserModel>>> GetUsers()
        {
            return await _userService.GetUsers();
        }
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<UserModel>> GetUsersById(int id)
        {
            return await _userService.GetUsersById(id);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateUser(CreateUserModel createUserModel)
        {
            await _userService.CreateUser(createUserModel);
            return Ok();
        }

        [HttpPut("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateUser(int id, CreateUserModel createUserModel)
        {
            await _userService.UpdateUser(id, createUserModel);
            return Ok();
        }

        [HttpPut]
        [Route("disable/{id}")]
        [AllowAnonymous]
        public async Task<ActionResult> DisableUser(int id)
        {
            await _userService.DisableUser(id);
            return Ok();
        }
    }
}
