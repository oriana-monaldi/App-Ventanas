package main

import "fmt"

func main() {
	fmt.Println("Bienvenido a la aplicación")
	fmt.Println("Seleccione la opción que desee \n 1- Mayor vs Menor \n 2- Modulo ")

	var opcion int
	fmt.Scanln(&opcion)

	if opcion == 1 {
		mayorVsMenor() 
	} else {
		Modulo() 
	}
}

func mayorVsMenor () {
	fmt.Println("Ingrese el primer numero")
	var num1 int
	fmt.Scanln(&num1)

	fmt.Println("Ingrese el segundo numero")
	var num2 int 
	fmt.Scanln(&num2)

	if num1 > num2  {
		fmt.Println("El primer numero ingresado siendo" , num1, "es mayor al segundo numero" , num2)
	}else if  num2 > num1 {
		fmt.Println("El segundo numero ingresado siendo" , num2 ,"es mayor al primer numero" , num1)
	}else {
		fmt.Println("Los dos numeros son iguales")
	}
} 

func Modulo() {
	fmt.Println("Ingrese el primer numero")
	var num1 int
	fmt.Scanln(&num1)

	fmt.Println("Ingrese el segundo numero")
	var num2 int 
	fmt.Scanln(&num2)

	Modulo := num1 % num2

	fmt.Println("El modulo es" , Modulo)
} 