use std::fs;
use std::collections::HashSet;

fn main() {

    part_1();
    part_2();
}

fn part_1() {
    let file_path = "./data/input.txt";

    let contents = fs::read_to_string(file_path)
        .expect("Should have been able to read the file");

    let contents = contents.split("\n");

    let mut total_priority = 0;

    for s in contents {

        let length = s.len();
        let compartment_size = length / 2;
        let compartment_1 = &s[0..compartment_size];
        let compartment_2 = &s[compartment_size..length];

        let mut letters_in_compartment_1 = HashSet::new();

        for c in compartment_1.chars() { 
            letters_in_compartment_1.insert(c);
        }

        let mut common_character: char = ' ';
        for c in compartment_2.chars() { 
            if letters_in_compartment_1.contains(&c) {
                common_character = c;
                break;
            }
        }

        let common_character = common_character as u32;
        let priority = (common_character % 32) + 
            (if (common_character) > 96 {0} else {26} ); //add 26 if uppercase

        total_priority += priority;
    }

    println!("Part 1 answer: {}", total_priority);
}

fn part_2() {
    let file_path = "./data/input.txt";

    let contents = fs::read_to_string(file_path)
        .expect("Should have been able to read the file");

    let contents = contents.split("\n");
    let contents = contents.collect::<Vec<&str>>();

    let mut total_priority = 0;

    for i in 0..(contents.len() / 3) {

        let first_elf_index = i * 3;
        let second_elf_index = i * 3 + 1;
        let third_elf_index = i * 3 + 2;

        let mut letters_in_rucksack_1 = HashSet::new();
        let mut letters_in_rucksack_1_and_2 = HashSet::new();

        for c in contents[first_elf_index].chars() { 
            letters_in_rucksack_1.insert(c);
        }

        for c in contents[second_elf_index].chars() { 
            if letters_in_rucksack_1.contains(&c) {
                letters_in_rucksack_1_and_2.insert(c);
            }
        }

        let mut common_character: char = ' ';

        for c in contents[third_elf_index].chars() { 
            if letters_in_rucksack_1_and_2.contains(&c) {
                common_character = c;
            }
        }

        let common_character = common_character as u32;
            let priority = (common_character % 32) + 
                (if (common_character) > 96 {0} else {26} ); //add 26 if uppercase

        total_priority += priority;
    }

    println!("Part 2 answer: {}", total_priority);
}