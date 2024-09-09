const db = require("../models");
const Student = db.students;
const Op = db.Sequelize.Op;

// Create and Save a new Student
exports.create = (req, res) => {
    if (!req.body.firstName) {
        res.status(400).send({
            mesage: "Content cannot be empty",
        });
        return;
    }

    const newStudent = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gradeLevel: req.body.gradeLevel,
    };

    Student.create(newStudent)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "There was a problem saving the new student",
            });
        });
};

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
    const fn = res.query.firstName;
    var condition = fn ? { firstName: { [Op.like]: `%{fn}%` } } : null;

    Student.findAll({ where: condition })
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "There was a problem retreiving students",
            });
        });
};

// Find a single Student by id
exports.findOne = (req, res) => {
    // depending on uuid, may need to find id by first name.then(send)
    const id = req.query.id;

    Student.findByPk(id)
        .then(data => res.send(data))
        .catch(err =>
            res.status(500).send({
                message:
                    err.message || `Could not retreive student with id = ${id}`,
            })
        );
};

// Update a Student by the id in the request
exports.update = (req, res) => {
    // may need to search by all data
    const id = req.params.id;

    Student.update(req.body, {
        where: { id: id },
    })
        .then(db_status => {
            db_status == 1
                ? res
                      .status(200)
                      .send({ message: "Student updated successfully" })
                : res
                      .status(400)
                      .send({ message: `Cannot update student with id ${id}` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message ||
                    `There was a problem updating student with id = ${id}`,
            });
        });
};

// Delete a Student with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Student.destroy({
        where: { id: id },
    })
        .then(db_status => {
            // robust way to handle would be to search if found
            db_status == 1
                ? res
                      .status(200)
                      .send({ message: "Student deleted successfully" })
                : res
                      .status(400)
                      .send({ message: `Cannot delete student with id ${id}` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message ||
                    `There was a problem deleting student with id = ${id}`,
            });
        });
};

// Delete all Students from the database.
exports.deleteAll = (req, res) => {
    Student.destroy({
        where: {},
        truncate: false,
    })
        .then(qty => {
            res.status(200).send({
                message: `${qty} student records deleted.`,
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message ||
                    "There was a problem deleting all student records",
            });
        });
};
