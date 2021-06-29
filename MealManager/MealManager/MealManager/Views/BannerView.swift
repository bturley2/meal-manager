//
//  BannerView.swift
//  MealManager
//
//  Created by Bryce Turley on 6/28/21.
//

import SwiftUI

struct BannerView: View {
    var title: String = "BannerTitle"
    
    let bannerHeight = 35
    let bannerColor = Color.gray
    
    var body: some View {
        VStack {
            HStack() {
                Spacer()
                Text(self.title)
                    .font(.title)
                Spacer()
                Text("(bar)")
            }
            .background(self.bannerColor)
            .frame(height: CGFloat(bannerHeight))

            Spacer()
        }
    }
}

struct BannerView_Previews: PreviewProvider {
    static var previews: some View {
        BannerView(title: "Dashboard")
        BannerView(title: "Dashboard")
            .previewDevice("iPhone 12")
    }
}
