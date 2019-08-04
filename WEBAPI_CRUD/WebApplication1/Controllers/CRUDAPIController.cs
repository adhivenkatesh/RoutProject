using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

// callling the controller namesapce

using WebApplication1.Models;

namespace WebApplication1.Controllers
{

[RoutePrefix("Api/CRUDAPI")]
    public class CRUDAPIController : ApiController
    {
    // WRITING API CODE HERE...

    Entities objEntity = new Entities();

    [HttpGet]

    [Route("AllEmployeeDetails")]

    public IQueryable<EmployeeCRUD> GetEmployees()
    {
      try
      {
        return objEntity.EmployeeCRUDs;

      }
      catch (Exception)
      {
        throw;
      }
    }

    [HttpGet]
    [Route("GetEmployeeDetailsByID/{EmployeeID}")]

    public IHttpActionResult GetEmaployeeById(string EmployeeID)
    {
      EmployeeCRUD objempdetails = new EmployeeCRUD();

      int ID = Convert.ToInt32(EmployeeID);

            try
            {
              objempdetails = objEntity.EmployeeCRUDs.Find(ID);
              if (objempdetails == null)
              {
                return NotFound();
              }

            }
            catch (Exception)
            {
              throw;
            }

            return Ok(objempdetails);
      }

          [HttpPost]
          [Route("InsertEmployeeDetails")]
          public IHttpActionResult PostEmaployee(EmployeeCRUD data)
          {

            if (!ModelState.IsValid)
            {
              return BadRequest(ModelState);
            }
            try
            {
              objEntity.EmployeeCRUDs.Add(data);
              objEntity.SaveChanges();
            }
            catch (Exception)
            {
              throw;
            }

            return Ok(data);
          }


          [HttpPut]
          [Route("UpdateEmployeeDetails")]
          public IHttpActionResult PutEmaployeeMaster(EmployeeCRUD employee)
          {
            if (!ModelState.IsValid)
            {
              return BadRequest(ModelState);
            }

            try
            {
              EmployeeCRUD objEmp = new EmployeeCRUD();
              objEmp = objEntity.EmployeeCRUDs.Find(employee.EmpID);
              if (objEmp != null)
              {
                objEmp.EmpName = employee.EmpName;
                objEmp.EmailID = employee.EmailID;
                objEmp.DOB = employee.DOB;
                objEmp.Gender = employee.Gender;
              }
              int i = this.objEntity.SaveChanges();

            }
            catch (Exception)
            {
              throw;
            }
            return Ok(employee);
          }

          [HttpDelete]
          [Route("DeleteEmployeeDetails")]
          public IHttpActionResult DeleteEmaployeeDelete(int id)
          {
            //int empId = Convert.ToInt32(id);  
            EmployeeCRUD emaployee = objEntity.EmployeeCRUDs.Find(id);
            if (emaployee == null)
            {
              return NotFound();
            }

            objEntity.EmployeeCRUDs.Remove(emaployee);
            objEntity.SaveChanges();

            return Ok(emaployee);
          }


    }
}
