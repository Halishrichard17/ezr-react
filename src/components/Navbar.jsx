import "bootstrap/dist/css/bootstrap.css";
import "./components.css"
function Navbar(){
    return(
        <>
    <div>
    <div className=" header ">
        <div className=" d-flex justify-content-between align-items-center ">
            <div className="" >
                 <h2>EZRecorder</h2>
            </div>
            <div className=" ">
            <div cla ss="input-group mt-3">
            <input type="text"  class="form-control" aria-describedby="basic-addon2" />
     
          <div class="input-group-append">
          <i class="bi bi-search"></i>
          </div>
        </div>
            </div>
            <div className=" ">
                <button>
                    Menu
                </button>
            </div>
       
        </div>
         
    </div>
    <div class="customalert alert-info">
            <div class="alert-left-side">
                <p>An alert message is information displayed when an unforeseen problem occurs...</p>
            </div>
            <div class="alert-middle-side">
                <span class="alert-left-side-icon text-center">
                    <a class="alert-link" href="#" data-toggle="popover" data-trigger="focus" data-dismiss="modal" data-placement="bottom" data-title="Alert message" data-content="An alert message is information displayed when an unforeseen problem occurs, usually on a computer or other device. On modern operating systems with graphical user interfaces, error messages are often displayed using dialog boxes."><i class="fa fa-exclamation-circle"></i></a>
                    
                    </span>
            </div>
            <div class="alert-right-side">
                <marquee onmouseover="this.stop();" onmouseout="this.start();">
                    <p>
                        <a href="#"><span class="badge badge-danger">News</span><span class="marquee-span">Career and Professional Development for Graduate Students</span></a>
                        <a href="#"><span class="badge badge-info">Announcement</span><span class="marquee-span">Career and Professional Development for Graduate Students</span></a>
                        <a href="#"><span class="badge badge-danger">Notice</span><span class="marquee-span">Career and Professional Development for Graduate Students</span></a>
                    </p>
                </marquee>
            </div>
        </div>
    </div>
        </>
    );
}

export default Navbar;