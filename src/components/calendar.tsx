import "bootstrap/dist/css/bootstrap.css";
import "./components.css"
function Calandar(){
    return(<>

   
<div className="space-10"></div>
<div className=" gg">
    <div className="col-md-8" >
            <div className="panel">
                <header className="panel-heading">
                    <h2 className="panel-title">Monthly Appointments</h2>
                </header>
                <div className="panel-body">
                      <div id='calendar'></div>
                </div>
            </div>
    </div>
    <div className="col-md-4">
        <div className="panel">
                <header className="panel-heading">
                    <div className="panel-search">
                        <div className="form-panel-search">
                            <input type="text" id="txtStudentName" className="form-control" placeholder="Search..." />
                            <i className="fa fa-search"></i>
                        </div>
                    </div>
                    <h2 className="panel-title">Student List</h2>
                </header>
                <div className="panel-body">
                      <div>
                        <ul className="list-inline tabs-bordered margin-b-10" role="tablist">
                            <li role="presentation" className="active"><a href="#tb1" aria-controls="tb1" role="tab" data-toggle="tab">Individual</a></li>
                            <li role="presentation"><a href="#tb2" aria-controls="tb2" role="tab" data-toggle="tab">Group</a></li>
                        </ul>
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="tb1">
                                <div className="scrollDiv">
                                    <table id="dtStudent" className="table table-striped dt-responsive nowrap">
                                        <thead className="table-th-theme">
                                            <tr>
                                                <th className="hidden">id</th>
                                                <th>Student Name</th>
                                                <th>Schoole Name</th>
                                                <th>Service Date</th>
                                            </tr>
                                        </thead>

                                        <tbody id="dtStudentRows">
                                            <tr>
                                                <td className="hidden"></td>
                                                <td><a href="#">Shad Decker</a></td>
                                                <td>Regional Development School</td>
                                                <td>2008/11/13</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="tb2">
                                <div className="scrollDiv">
                                    <p>Coming Soon..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel">
            <header className="panel-heading">
                <div className="panel-search">
                    <div className="form-panel-search">
                        <a href="/Services" className="btn btn-primary btn-xs btnaddAppointment" id="btnAddAppointment">Add Service</a>
                        @*<i className="glyphicon glyphicon-plus"></i>*@
                    </div>
                </div>
                <h2 className="panel-title">Daily Appointments</h2>
            </header>
                <div className="panel-body">
                   
                </div>
            </div>
    </div>
</div>
    </>);
}
export default Calandar;