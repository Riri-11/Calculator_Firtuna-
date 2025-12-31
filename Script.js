importjavax.swing.*;
importjava.awt.*;
importjava.awt.event.*;

public class ScientificCalculator extends JFrame implements ActionListener {

    JTextField display;
    double num1, result;
    Stringoperator;

    publicScientificCalculator() {

        setTitle("Scientific Calculator");
        setSize(400, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(null);

        display = new JTextField();
        display.setBounds(20, 20, 340, 40);
        display.setFont(new Font("Arial", Font.BOLD, 20));
        display.setHorizontalAlignment(JTextField.RIGHT);
        add(display);

        String[] buttons = {
            "7","8","9","/","sin",
            "4","5","6","*","cos",
            "1","2","3","-","tan",
            "0",".","=","+","C",
            "√","x²","log"
        };

        int x = 20, y = 80;
        for (int i = 0; i < buttons.length; i++) {
            JButton btn = new JButton(buttons[i]);
            btn.setBounds(x, y, 60, 40);
            btn.addActionListener(this);
            add(btn);

            x += 70;
            if ((i + 1) % 5 == 0) {
                x = 20;
                y += 50;
            }
        }

        setVisible(true);
    }

    public voidactionPerformed(ActionEvent e) {

        Stringcmd = e.getActionCommand();

        if (cmd.matches("[0-9.]")) {
            display.setText(display.getText() + cmd);
        }
        else if (cmd.equals("C")) {
            display.setText("");
        }
        else if (cmd.equals("=")) {
            doublenum2 = Double.parseDouble(display.getText());

            switch (operator) {
                case "+": result = num1 + num2; break;
                case "-": result = num1 - num2; break;
                case "*": result = num1 * num2; break;
                case "/": result = num1 / num2; break;
            }
            display.setText("" + result);
        }
        else if (cmd.equals("sin")) {
            doublevalue = Double.parseDouble(display.getText());
            display.setText("" + Math.sin(Math.toRadians(value)));
        }
        else if (cmd.equals("cos")) {
            doublevalue = Double.parseDouble(display.getText());
            display.setText("" + Math.cos(Math.toRadians(value)));
        }
        else if (cmd.equals("tan")) {
            doublevalue = Double.parseDouble(display.getText());
            display.setText("" + Math.tan(Math.toRadians(value)));
        }
        else if (cmd.equals("√")) {
            doublevalue = Double.parseDouble(display.getText());
            display.setText("" + Math.sqrt(value));
        }
        else if (cmd.equals("x²")) {
            doublevalue = Double.parseDouble(display.getText());
            display.setText("" + Math.pow(value, 2));
        }
        else if (cmd.equals("log")) {
            doublevalue = Double.parseDouble(display.getText());
            display.setText("" + Math.log10(value));
        }
        else {
            num1 = Double.parseDouble(display.getText());
            operator = cmd;
            display.setText("");
        }
    }

    public static voidmain(String[] args) {
        new ScientificCalculator();
    }
}
