package domain;

public class Reference {
	
	private final String id;
	private final String name;
	private final String description;
	private final int price;
	
	public Reference(String id, String name, String description, int price) {
		this.id = id;
		this.name = name;
		this.description = description;
		if (price <= 0) throw new RuntimeException("the quantity must be a strictly positive integer") ;
		else this.price = price;
	}

	public String getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}

	public int getPrice() {
		return price;
	}

	@Override
	public String toString() {
		return "!________________________!\n"+
		 "! Product  => Ref: " + id + "   !\n"+
		 "!________________________!\n"+
		 "! Name: " + name +"          !\n"+
		 "! Description: " + description + " !\n"+
		 "! Price: " + price  +" $          !\n"+
		 "!________________________!\n";
	}
	
	
	
	
	
	
	

}
