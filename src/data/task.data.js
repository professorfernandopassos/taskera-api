import Task from "../model/task.js";
import User from "../model/user.js";

class TaskData {

    constructor(){

    }

    create(task){
        return new Task()
    }

    find(user){
        return []
        // or return new Array()
    }

    findOne(task){
        return new Task()
    }

    update(task){
        return new Task()
    }

    delete(task){

    }

}