//
//  ModelData.swift
//  Landmarks
//
//  Created by Bryce Turley on 6/22/21.
//

import Foundation

// use the below function to load the JSON data into an array of Landmarks
var landmarks: [Landmark] = load("landmarkData.json")

// attempts to load data from the given file
// note that the return type is simply an object T which is decodable
func load<T: Decodable>(_ filename: String) -> T {
    let data: Data
    
    // attempts to open the file using the given filename
    guard let file = Bundle.main.url(forResource: filename, withExtension: nil)
    else {
        fatalError("Couldn't find \(filename) in main bundle.")
    }
    
    // attempts to store the file information as a 'Data' object
    do {
        data = try Data(contentsOf: file)
    } catch {
        fatalError("Couldn't load \(filename) from main bundle.")
    }
    
    // attempts to parse the 'Data' object using a 'JSONDecoder' object
    do {
        let decoder = JSONDecoder()
        return try decoder.decode(T.self, from: data)
    } catch {
        fatalError("Couldn't parse \(filename) as \(T.self):\n\(error)")
    }
}
