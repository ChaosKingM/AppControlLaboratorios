import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'flex-start',
  },
  heroMarca: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 28,
    backgroundColor: '#8A151B',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: 'hidden'
  },
  frameBadge: {
    flexDirection: 'row',
    padding:8,
    backgroundColor: '#31ed0b01',
  },
  utrBadge: {
    backgroundColor: '#ffffff47',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  badgeText: {
    color: '#FFFFFF',

  },
  button: {
    backgroundColor: '#8A151B',
    width: 100,
    borderRadius: 9999,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
