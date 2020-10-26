package test;

import domain.Basket;
import domain.Reference;

public class TestUser {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		Reference ref = new Reference("001", "MacBook", "13 pouces", 1000);
		Reference ref2 = new Reference("002", "MacBook", "16 pouces", 1500);
		Reference ref3 = new Reference("003", "MacBook", "15 pouces", 1200);
		
		
		//Command command = new Command(ref2,5);
		
		//System.out.println(command.toString());
		//System.out.println(ref.toString());
		Basket panier = new Basket();
//		Basket panier2 = new Basket();
//		Basket panier3 = new Basket();
//		System.out.println(panier.getIdBasket());
//		System.out.println(panier2.getIdBasket());
//		System.out.println(panier3.getIdBasket());
		
		panier.addCommand(ref, 2);
		panier.addCommand(ref, 3);
		System.out.println(panier.toString());
		panier.removeCommand(ref);
//		panier.addCommand(ref2, 3);
//		panier.addCommand(ref3, 4);
//		panier.validBasket();
//		panier.addCommand(ref3, 4);
		System.out.println(panier.toString());
//		panier.addCommand(ref, 4);
//		panier.addCommand(ref2, 2);
//		panier.addCommand(ref2, 2);
		//System.out.println(panier.toString());
		//panier.removeCommand(ref);
		//System.out.println(panier.getCommandLines().toString());
		
//		System.out.println(panier.toString());
		
		
	}

}
