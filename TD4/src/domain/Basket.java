package domain;

import java.util.HashSet;
import java.util.Set;
@SuppressWarnings("unused")
public class Basket {
	
	private int idBasket;
	private static int nextId = 0;
	Set<Command> commandLines ;
	private int totalAmount;
	private boolean valid;
	
	@SuppressWarnings("static-access")
	public Basket() {
		this.idBasket = this.nextId++;
		commandLines = new HashSet<Command>();
		this.totalAmount = 0;
		this.valid = false;
	}
	
	public void addCommand(Reference idref,int quantity) {
		if (!this.valid) {
			Command command = new Command(idref, quantity);
			if( commandLines.add(command) ){
				System.out.println("add succesfull");
			}else
			{	
				System.out.println("reference already exist");
				for (Command com : commandLines) {
					if(com.equals(command)) com.addQuantity(quantity);
				}
			}
			this.totalAmount = this.totalAmount + command.getAmount();
		}else System.out.println("sorry this basket is validated, can not add");
	}
	
	public void removeCommand(Reference idref){
		if(!this.valid) {
			Command command = new Command(idref);
			if(commandLines.contains(command)) {
				for (Command com : commandLines) {
					if(com.equals(command)) this.totalAmount = this.totalAmount - (com.getQuantity() * idref.getPrice());
				}
				commandLines.remove(command);
				System.out.println("remove succesfull");
			}else System.out.println("sorry but this reference  does not exist");
		}else System.out.println("sorry this basket is validated, can not remove");
		
	}
	public void validBasket() {
		this.valid = true;
	}
	
	public void clearBasket() {
		commandLines.clear();
		this.totalAmount = 0;
	}

	public int getIdBasket() {
		return idBasket;
	}

	public Set<Command> getCommandLines() {
		return commandLines;
	}

	public int getTotalAmount() {
		return totalAmount;
	}


	@Override
	public String toString() {
		return ".____________________________.\n"+
				 "!          Basket            !\n"+
				 "!____________________________!\n"+
				 "! Total amount: "+totalAmount +" $      !\n"+
				 "! Commands list              !\n"+
				 "!____________________________!\n"+
				 commandLines;
	}
	
	
	

	
	
	
	
}
