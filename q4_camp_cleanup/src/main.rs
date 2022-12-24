use std::fs;

fn main() {
    part_1();
    part_2();
}

fn convert_range_to_int_list(range: &str) -> Vec<u32> {
    let num_pair: Vec<&str> = range.split('-').collect();
    let num_pair: Vec<u32> = num_pair.into_iter().map(|x| x.parse().unwrap()).collect();
    return num_pair;
}

fn part_1() {
    let file_path = "./data/input.txt";
    let contents = fs::read_to_string(file_path)
        .expect("Should have been able to read the file");
    let pairs_of_elves = contents.lines();

    let mut num_fully_contained = 0;

    for pair in pairs_of_elves {
        let pair: Vec<&str> = pair.split(',').collect();
        let first_elf = pair[0];
        let second_elf = pair[1];

        let first_elf = convert_range_to_int_list(first_elf);
        let second_elf = convert_range_to_int_list(second_elf);

        //Check if first_elf is contained within second_elf
        if first_elf[0] >= second_elf[0] && first_elf[1] <= second_elf[1] {
            num_fully_contained+=1;
        //Check if second_elf is contained within first_elf
        } else if second_elf[0] >= first_elf[0] && second_elf[1] <= first_elf[1]  {
            num_fully_contained+=1;
        }
    }

    println!("First part solution: {}", num_fully_contained);
}

fn part_2() {
    let file_path = "./data/input.txt";
    let contents = fs::read_to_string(file_path)
        .expect("Should have been able to read the file");
    let pairs_of_elves = contents.lines();

    let mut num_fully_contained = 0;

    for pair in pairs_of_elves {
        let pair: Vec<&str> = pair.split(',').collect();
        let first_elf = pair[0];
        let second_elf = pair[1];

        let first_elf = convert_range_to_int_list(first_elf);
        let second_elf = convert_range_to_int_list(second_elf);

        //Check if first_elf is contained within second_elf
        if first_elf[0] < second_elf[0] {
            if first_elf[1] >= second_elf[0] {
                num_fully_contained+=1;
            }
        } else if first_elf[0] > second_elf[0] {
            if second_elf[1] >= first_elf[0] {
                num_fully_contained+=1;
            }
        } else { //first_elf[0] == second_elf[0]
            num_fully_contained+=1;
        }
    }

    println!("Second part solution: {}", num_fully_contained);
}