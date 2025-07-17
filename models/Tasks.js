module.exports = (sequelize, DataTypes) => {
    const Tasks = sequelize.define("Tasks", {
        task: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        taskText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dueDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return Tasks
}