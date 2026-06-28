const express=require("express");

const router=express.Router();

const{

getLessons,
getLesson,
createLesson,
updateLesson,
deleteLesson

}=require("../controllers/lessonController");

const auth=require("../middleware/auth");

router.get("/",getLessons);

router.get("/:id",getLesson);

router.post("/",auth,createLesson);

router.put("/:id",auth,updateLesson);

router.delete("/:id",auth,deleteLesson);

module.exports=router;