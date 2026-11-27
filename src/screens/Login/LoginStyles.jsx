import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
  },
  heroMarca: {

    width: '100%',
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#8A151B',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: 'hidden',
    gap: 14, 
  },
  frameBadge: {
    flexDirection: 'row',
    gap:10,
    alignItems: 'center'
  },
  utrBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
  badgeText: {
    color: '#FFFFFF',
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 14,
  },
  sideBadgeText: {
    color: '#FFFFFF',
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  login: {
    gap: 6
  },
  loginTitle: {
    color: '#FFFFFF',
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 30,
    textAlign: 'start',
    lineHeight: 36,
  },
  loginBody: {
    color: '#FFFFFF',
    fontFamily: 'PlusJakartaSans_400Regular',
    fontSize: 14,
    textAlign: 'start',
    lineHeight: 20,
  },
  bodyContainer: {
    flex:1,
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 24,
    backgroundColor: '#ffffffff',
    overflow: 'hidden',
    gap: 18, 
  }
});
