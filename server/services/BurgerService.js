import { FAKE_DB } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class BurgerService {
    async editBurger(burgerId, burgerData) {
        let burger = await this.getBurgerById(burgerId)
        burger.name = burgerData.name || burger.name
    }

    async getBurgerById(burgerId) {
        let burger = FAKE_DB.burger.find(b => b.id == burgerId)

        if (!burger) {
            throw new BadRequest("Invalid ID")
        }
        return burger
    }



}