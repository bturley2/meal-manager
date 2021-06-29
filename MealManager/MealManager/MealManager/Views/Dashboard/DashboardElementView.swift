//
//  DashboardElementView.swift
//  MealManager
//
//  Created by Bryce Turley on 6/28/21.
//

import SwiftUI

struct DashboardElementView: View {
    var title: String = "DashboardElement Title"
    var description: String = "DashboardElement Description"
    var backgroundColor: Color = Color.init(red: 0.3, green: 0.6, blue: 1, opacity: 0.8)
    
    let elementShape = RoundedRectangle(cornerSize: CGSize(width: 15, height: 15))
            
    var body: some View {
        ZStack {
            backgroundColor
            VStack(alignment: .trailing) {
                Text(self.title)
                    .font(.title)
                Text(self.description)
                    .font(.body)
            }
        }
        .frame(height: 75)
        .clipShape(self.elementShape)
        .overlay(self.elementShape.stroke(Color.gray, lineWidth: 1))
        .padding(3)
        
    }
}

struct DashboardElementView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            DashboardElementView()
                .previewDevice("iPhone 12")
        }
    }
}

