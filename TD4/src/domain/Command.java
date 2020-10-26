package domain;

public class Command {
	
	private Reference idRef;
	private int quantity;
	private int amount;
	public Command(Reference idRef, int quantity) {
		this.idRef = idRef;
		if(quantity <= 0) throw new RuntimeException("the quantity must be a strictly positive integer");
		else this.quantity = quantity;
		this.amount = idRef.getPrice() * quantity;
	}
	
	public Command(Reference idRef) {
		this.idRef = idRef;
	}
	

	@Override
	public int  hashCode() {
		return idRef.hashCode();
	}


	public Reference getIdRef() {
		return idRef;
	}


	public int getQuantity() {
		return quantity;
	}


	public int getAmount() {
		return amount;
	}
	public void addQuantity(int qte) {
		this.quantity = this.quantity + qte;
		this.amount = idRef.getPrice() * this.quantity;
		 
	}
	
	@SuppressWarnings("unused")
	@Override
	public boolean equals(Object obj) {
		if( !(obj instanceof Command) ) return false;
		if(obj == null) return false;
		Command others = (Command) obj;
		return idRef.equals(others.idRef);
//		return idRef.getId() == others.getIdRef().getId();
	}
	
	@Override
	public String toString() {
		return "\n._____________________________________________________________________________.\n"+ 
				 "!       Commands         ! "+"      Quantity: " + quantity +"        "+"!       Amount: " + amount + " $    !\n"+
				 "!________________________!__________________________!_________________________!\n"+
				 idRef + "   \n";
	}
	
	
	
}
