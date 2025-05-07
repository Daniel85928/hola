package co.edu.unbosque.view;

import java.awt.Color;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class VentanaInicio extends JFrame{
	
	private JPanel boton;
	private JButton volver;
	
	public VentanaInicio() {
		setBounds(10, 10, 800, 600);
		setTitle("Simulacion  ");
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(null);
		
		boton = new JPanel();
		boton.setBounds(0, 415, 200, 150);
		boton.setBackground(Color.black);
		boton.setLayout(null);
		
		volver = new JButton("Volver");
		volver.setBounds(50, 50, 100, 50);
		
		boton.add(volver);
		
		add(boton);
	}

	public JPanel getBoton() {
		return boton;
	}

	public void setBoton(JPanel boton) {
		this.boton = boton;
	}

	public JButton getVolver() {
		return volver;
	}

	public void setVolver(JButton volver) {
		this.volver = volver;
	}
	
}
