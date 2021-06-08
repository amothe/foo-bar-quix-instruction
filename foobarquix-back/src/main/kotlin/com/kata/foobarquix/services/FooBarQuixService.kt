package com.kata.foobarquix.services

import org.springframework.stereotype.Component

@Component
class FooBarQuixService {

    fun convertNumber(inputNumber: Int): String {
        var result = "";
        if (inputNumber.rem(3) == 0) {
            result += "Foo";
        }
        if (inputNumber.rem(5) == 0) {
            result += "Bar";
        }
        for (char in inputNumber.toString()) {
            if (char == '3')
                result += "Foo";
            if (char == '5')
                result += "Bar";
            if (char == '7')
                result += "Quix";
        }
        if (result.isEmpty())
            return inputNumber.toString();
        return result
    }

}