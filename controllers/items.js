import { v4 as uuidv4 } from 'uuid';
let items = [
    {
        taskToDo: 'wash',
        when: 'monday',
        time: 12,
    },
];

class ItemsController {
    static createItem(req, res) {
        const todo = req.body;

        items.push({ ...todo, id: uuidv4() });

        res.json(`item with the name ${items.taskToDo} added to the database!`);
    }

    static getATask(req, res) {
        const { id } = req.params;

        const foundItem = todo.find((item) => item.id === id);
        if (!foundItem) {
            return res
                .status(404)
                .json({ error: 'item does not exist please check id' });
        }
        res.json(foundItem);
    }

    static getAllItems(req, res) {
        res.json(items);
    }

    static deleteItem(req, res) {
        const { id } = req.params;

        items = items.filter((item) => item.id !== id);

        res.json(`item with the id ${id} deleted from the database.`);
    }

    static upDated(req, res) {
        const { id } = req.params;

        const { taskToDo, when, time } = req.body;

        const item = items.find((item) => item.id === id);
        if (!item) {
            return res
                .status(404)
                .json({ error: 'item does not exist please check id' });
        }

        if (taskToDo) item.taskToDo = taskToDo;

        if (when) item.when = when;

        if (time) item.age = time;

        res.json(`item with id ${id}has been updated`);
    }
}

export default ItemsController;
