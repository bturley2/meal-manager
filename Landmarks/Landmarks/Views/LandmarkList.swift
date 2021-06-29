//
//  LandmarkList.swift
//  Landmarks
//
//  Created by Bryce Turley on 6/22/21.
//

import SwiftUI

struct LandmarkList: View {
    var body: some View {
        NavigationView {
            List(landmarks) { landmark in
                NavigationLink(destination: LandmarkDetail(landmark: landmark)) {
                   LandmarkRow(landmark: landmark)
                }
            }
            .navigationTitle("Landmarks")
        }
    }
}

struct LandmarkList_Previews: PreviewProvider {
    static var previews: some View {
        LandmarkList()
            //.previewDevice(PreviewDevice(rawValue: "iPhone SE (2nd generation)"))
    }
}
