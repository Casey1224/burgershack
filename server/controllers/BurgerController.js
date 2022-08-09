import { burgerService } from '../services/BurgerService.js';
import BaseController from '../utils/BaseController.js';
export class BurgerController extends BaseController {






    constructor() {
        super('/api/burgers')

        this.router
            .get('', this.getBurgers)
            .post('', this.createBurger)
            .get('/:burgerId', this.getBurgerById)
            .put('/:burgerId', this.editBurger)
            .delete('/:burgertId', this.deleteBurger)
    }

    async getBurger(req, res, next) {

        try {
            let burger = await burgerService.getBurgerById(req.params.burgerId)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }


    async createBurger(req, res, next) {
        try {
            let burgerData = req.body
        } catch (error) {
            let burger = await burgerService.createBurger(burgerData)
            res.send(burger)
        }

    }

    async editBurger(req, res, next) {
        try {
            let burger = await burgerService.editBurger(req.params.burgerId, req.body)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }



    async deleteBurger(req, res, next) {
        try {
            let burger = await burgerService.deleteBurger(req.params.burgerId)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }
}